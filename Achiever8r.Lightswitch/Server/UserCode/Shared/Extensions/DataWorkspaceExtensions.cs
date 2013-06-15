using System;
using System.Collections.Generic;
using System.Linq;

namespace LightSwitchApplication
{
    public static class DataWorkspaceExtensions
    {
        /// <summary>
        /// Gets the current User's entity
        /// </summary>
        /// <param name="dw"></param>
        /// <returns></returns>
        public static User GetCurrentUser(this DataWorkspace dw)
        {
            var currentUserName = LightSwitchApplication.Application.Current.User.Name;
            User item = (from User i in dw.ApplicationData.Users
                         where i.LoginId.Equals(currentUserName, StringComparison.InvariantCultureIgnoreCase)
                         select i).SingleOrDefault();
            return item;
        }
    }
}