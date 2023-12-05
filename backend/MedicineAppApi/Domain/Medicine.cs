using System.ComponentModel.DataAnnotations.Schema;

namespace MedicineAppApi.Domain
{
    public class Medicine
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? DosageAndFrequency { get; set; }
        public string? Precautions { get; set; }
        public string? Overdosage { get; set; }
        public int CategoryId { get; set; }
        public string Image { get; set; }

        [ForeignKey(nameof(CategoryId))]
        public Category Category { get; set; }

    }
}
