using System.ComponentModel.DataAnnotations;

namespace DonorApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="You must specify password between 4 and 8 characters")] 
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string BloodGroup { get; set; }
    }
}