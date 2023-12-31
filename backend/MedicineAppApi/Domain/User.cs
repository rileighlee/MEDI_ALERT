﻿namespace MedicineAppApi.Domain
{
    public class User
    {
        public int Id { get; set; }
        public string? FullName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string? ContactNumber { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? RecoveryPhrase { get; set; }
    }
}
