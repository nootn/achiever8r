using System;
using System.Linq;
using System.IO;
using System.IO.IsolatedStorage;
using System.Collections.Generic;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Security;
namespace LightSwitchApplication
{
    public partial class Application
    {
        partial void Application_LoggedIn()
        {
            //ensure user exists in user table
            using (var db = Application.Current.CreateDataWorkspace())
            {
                //TODO: need to find a better place to do this and make it more efficient - seems to be a lot of Linq methods missing, like "Contains"..
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
                    var secUser = db.SecurityData.UserRegistrations.Where(_ => _.UserName.Equals(currMissingUserId.ToString(), StringComparison.InvariantCultureIgnoreCase)).Single();
                    var newAppUser = db.ApplicationData.Users.AddNew();
                    newAppUser.LoginId = secUser.UserName;
                    newAppUser.FullName = secUser.FullName;
                }

                //Ensure the current user is there, and that their name is up to date
                var existing = db.GetCurrentUser();
                if (existing == null)
                {
                    existing = db.ApplicationData.Users.AddNew();
                    existing.LoginId = User.Name;
                    existing.FullName = User.FullName;
                }
                else
                {
                    existing.FullName = User.FullName;
                }
                db.ApplicationData.SaveChanges();
            }
        }

        partial void AdministerAchievementCategories_CanRun(ref bool result)
        {
            result = User.HasPermission(Permissions.ApplicationAdministration);
        }

        partial void RecentAchievements_CanRun(ref bool result)
        {
            result = User.HasPermission(Permissions.GeneralAccess);
        }

        partial void CurrentRankings_CanRun(ref bool result)
        {
            result = User.HasPermission(Permissions.GeneralAccess);
        }
    }
}
