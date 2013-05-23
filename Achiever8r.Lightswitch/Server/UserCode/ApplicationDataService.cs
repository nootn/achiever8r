using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
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
    }
}
