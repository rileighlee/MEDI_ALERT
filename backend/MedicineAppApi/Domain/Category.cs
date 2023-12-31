﻿namespace MedicineAppApi.Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<Medicine> Medicines { get; set; }
    }
}
