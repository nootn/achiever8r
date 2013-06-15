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
                db.SyncUsers(User);
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
