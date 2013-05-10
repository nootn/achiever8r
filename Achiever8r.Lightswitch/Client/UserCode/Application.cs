using System;
using System.Linq;
using System.IO;
using System.IO.IsolatedStorage;
using System.Collections.Generic;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Presentation.Extensions;
namespace LightSwitchApplication
{
    public partial class Application
    {
        partial void Application_LoggedIn()
        {
            //ensure user exists in user table
            using (var db = Application.Current.CreateDataWorkspace())
            {
                var existing = db.ApplicationData.Users.Where(_=>_.LoginId.Equals(User.Name)).SingleOrDefault();
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
    }
}
