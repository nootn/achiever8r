using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using LightSwitchApplication.UserCode;

namespace LightSwitchApplication.Hubs
{
    public class NotifyHub : Hub
    {
        public override Task OnConnected()
        {
            if (Context.User != null && Context.User.Identity != null)
            {
                LoginStatus item;
                LoginStatus.UsersLoggedIn.TryGetValue(Context.User.Identity.Name, out item);
                if (item == null || !item.IsLoggedIn())
                {
                    item = new LoginStatus() { InitialLogin = DateTime.Now, LastConnect = DateTime.Now };

                    //If the user is not known or they are "not logged in" then initialize them
                    LoginStatus.UsersLoggedIn.AddOrUpdate(Context.User.Identity.Name, item, (key, oldValue) =>
                    {
                        oldValue.LastConnect = DateTime.Now; 
                        return oldValue;
                    });
                    
                    using (ServerApplicationContext ctx = ServerApplicationContext.CreateContext())
                    {
                        var currUser = ctx.Application.User;

                        //ensure in user exists in Users table
                        ctx.DataWorkspace.SyncUsers(currUser, ctx.Application);

                        StatusLog.UpdateStatus(string.Format("'{0}' logged on", currUser.FullName));
                    }
                }
                else
                {
                    item.LastConnect = DateTime.Now;
                    LoginStatus.UsersLoggedIn.AddOrUpdate(Context.User.Identity.Name, item, (key, oldValue) =>
                    {
                        oldValue.LastConnect = DateTime.Now; 
                        return oldValue;
                    });
                }

            }
            return base.OnConnected();
        }

        public override Task OnDisconnected()
        {
            if (Context.User != null && Context.User.Identity != null)
            {
                LoginStatus item;
                LoginStatus.UsersLoggedIn.TryGetValue(Context.User.Identity.Name, out item);
                if (item == null)
                {
                    item = new LoginStatus()
                    {
                        InitialLogin = DateTime.Now,
                        LastConnect = DateTime.Now,
                        LastDisconnect = DateTime.Now,
                    };
                }

                LoginStatus.UsersLoggedIn.AddOrUpdate(Context.User.Identity.Name, item, (key, oldValue) =>
                {
                    oldValue.LastDisconnect = DateTime.Now;
                    return oldValue;
                });

            }
            return base.OnDisconnected();
        }
    }
}