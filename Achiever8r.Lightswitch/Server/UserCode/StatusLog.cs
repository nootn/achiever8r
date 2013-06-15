using LightSwitchApplication.Hubs;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.UserCode
{
    public static class StatusLog
    {
        private static object syncLock = new object();
        private static string LatestStatus;

        public static void UpdateStatus(string status, bool addExtraLoggedInUserCount = false)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<NotifyHub>();

            //Ensure we get each message in case that is important
            lock (syncLock)
            {
                var numUsers = LoginStatus.UsersLoggedIn.Where(_=>_.Value.IsLoggedIn()).Count();
                LatestStatus = string.Concat(DateTime.Now.ToString("dddd hh:mm:ss tt"), " - ", status, ".  ", numUsers, numUsers != 1 ? " users are " : " user is ", "online.");
                context.Clients.All.broadcastMessage(LatestStatus);
            }
        }

        public static string GetLatestStatus()
        {
            return LatestStatus;
        }
    }
}