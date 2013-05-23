using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Rating
    {
        partial void RatedByUser_Validate(EntityValidationResultsBuilder results)
        {
            if (!RatedByUser.LoginId.Equals(Application.User.Name, StringComparison.InvariantCultureIgnoreCase))
            {
                results.AddPropertyError("You can only alter your own r8ing, not someone else's");
            }

            if (DataWorkspace.ApplicationData.Ratings.Where(_ => _.Achievement.Id == Achievement.Id && _.RatedByUser.LoginId.Equals(Application.User.Name, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault() != null)
            {
                results.AddPropertyError("You may only r8 an achievement once.  You have already r8ed this achievement, please delete one of the r8ings");
            }
        }

        partial void Rating_Created()
        {
            RatedByUser = DataWorkspace.ApplicationData.Users.Where(_ => _.LoginId.Equals(Application.User.Name, StringComparison.InvariantCultureIgnoreCase)).Single();
            RatedOn = DateTime.Now;
        }
    }
}
