using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [MinLength(5, ErrorMessage="Password must be atleast 5 characters")]
        public string Password { get; set; }
    }
}