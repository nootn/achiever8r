using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void GetMissingUsers_PreprocessQuery(ref IQueryable<User> query)
        {
            var securityUserIds = DataWorkspace.SecurityData.UserRegistrations.Select(_ => _.UserName);
            var appUserIds = DataWorkspace.ApplicationData.Users.Select(_ => _.LoginId);

            var missingIds = securityUserIds.Where(su => appUserIds.Where(au => su.Equals(au, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault() == null);
        }

        partial void Achievements_Updating(Achievement entity)
        {
            entity.NumberOfRatings = entity.Ratings.Count();
        }

        partial void Ratings_Inserting(Rating entity)
        {
            entity.Achievement.NumberOfRatings = entity.Achievement.NumberOfRatings + 1;
        }

        partial void Ratings_Deleting(Rating entity)
        {
            entity.Achievement.NumberOfRatings = entity.Achievement.NumberOfRatings - 1;
        }

        partial void Achievements_Inserting(Achievement entity)
        {

        }

        partial void Achievements_Inserted(Achievement entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} created achievement '{1}'", Application.User.FullName, entity.Description));
        }

        partial void Achievements_Updated(Achievement entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} updated achievement '{1}'", Application.User.FullName, entity.Description));
        }

        partial void Achievements_Deleted(Achievement entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} deleted achievement '{1}'", Application.User.FullName, entity.Description));
        }

        partial void Ratings_Inserted(Rating entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} r8ed achievement '{1}' with comment '{2}", Application.User.FullName, entity.Achievement.Description, entity.Comment));
        }

        partial void Ratings_Updated(Rating entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} updated r8ing on achievement '{1}' with comment '{2}", Application.User.FullName, entity.Achievement.Description, entity.Comment));
        }

        partial void Ratings_Deleted(Rating entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} un-r8ed achievement '{1}' with comment '{2}", Application.User.FullName, entity.Achievement.Description, entity.Comment));
        }

        partial void AchievementCategories_Inserted(AchievementCategory entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} created category '{1}'", Application.User.FullName, entity.Description));
        }

        partial void AchievementCategories_Updated(AchievementCategory entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} updated category '{1}'", Application.User.FullName, entity.Description));
        }

        partial void AchievementCategories_Deleted(AchievementCategory entity)
        {
            StatusLog.UpdateStatus(string.Format("{0} deleted category '{1}'", Application.User.FullName, entity.Description));
        }


    }
}
