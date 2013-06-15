using Microsoft.LightSwitch.Security;
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
        /// <param name="db"></param>
        /// <returns></returns>
        public static User GetCurrentUser(this DataWorkspace db, Application app = null)
        {
            if (app == null)
            {
                app = LightSwitchApplication.Application.Current;
            }

            var currentUserName = app.User.Name;
            User item = (from User i in db.ApplicationData.Users
                         where i.LoginId.Equals(currentUserName, StringComparison.InvariantCultureIgnoreCase)
                         select i).SingleOrDefault();
            return item;
        }

        /// <summary>
        /// Ensures the current user exists in the user table, and checks all other users for updates
        /// </summary>
        /// <param name="db"></param>
        /// <param name="currUser"></param>
        /// <param name="app"></param>
        public static void SyncUsers(this DataWorkspace db, Microsoft.LightSwitch.Security.IUser currUser, Application app = null)
        {
            if (app == null)
            {
                app = LightSwitchApplication.Application.Current;
            }

            //TODO: make it more efficient - seems to be a lot of Linq methods missing, like "Contains"..
            var secUserIds = new List<string>();
            var appUserIds = new List<string>();

            foreach (var currItem in db.SecurityData.UserRegistrations)
            {
                var userItem = currItem as UserRegistration;
                secUserIds.Add(userItem.UserName);
            }

            foreach (var currItem in db.ApplicationData.Users)
            {
                var userItem = currItem as User;
                appUserIds.Add(userItem.LoginId);
            }

            var missingIds = secUserIds.Where(_ => !appUserIds.Contains(_, StringComparer.InvariantCultureIgnoreCase));

            foreach (var currMissingUserId in missingIds)
            {
                //not sure why this line doesn't work:
                //var secUser = db.SecurityData.UserRegistrations.Where(_ => _.UserName.Equals(currMissingUserId.ToString(), StringComparison.InvariantCultureIgnoreCase)).Single();

                var secUser = (from UserRegistration _ in db.SecurityData.UserRegistrations
                               where _.UserName.Equals(currMissingUserId.ToString(), StringComparison.InvariantCultureIgnoreCase)
                               select _).Single();
                var newAppUser = db.ApplicationData.Users.AddNew();
                newAppUser.LoginId = secUser.UserName;
                newAppUser.FullName = secUser.FullName;
            }

            //Ensure the current user is there, and that there name is up to date
            var existing = db.GetCurrentUser(app);
            if (existing == null)
            {
                existing = db.ApplicationData.Users.AddNew();
                existing.LoginId = currUser.Name;
                existing.FullName = currUser.FullName;
            }
            else
            {
                existing.FullName = currUser.FullName;
            }
            db.ApplicationData.SaveChanges();
        }
    }
}