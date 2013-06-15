using LightSwitchApplication.Hubs;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.UserCode
{
    public static class StatusLog
    {
        private static object syncLock = new object();
        private static string LatestStatus;

        public static void UpdateStatus(string status)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<NotifyHub>();

            //Ensure we get each message in case that is important
            lock (syncLock)
            {
                LatestStatus = string.Concat(DateTime.Now.ToString("dddd hh:mm:ss tt"), " - ", status);
                context.Clients.All.broadcastMessage(LatestStatus);
            }
        }

        public static string GetLatestStatus()
        {
            return LatestStatus;
        }
    }
}