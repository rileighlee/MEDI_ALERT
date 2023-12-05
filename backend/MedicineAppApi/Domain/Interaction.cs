using System.ComponentModel.DataAnnotations.Schema;

namespace MedicineAppApi.Domain
{
    public class Interaction
    {
        public int Id { get; set; }
        public int Medicine1Id { get; set; }
        public int Medicine2Id { get; set; }

        [ForeignKey(nameof(Medicine1Id))]
        public Medicine? Medicine1 { get; set; }
        [ForeignKey(nameof(Medicine2Id))]
        public Medicine? Medicine2 { get; set; }
        public string? ConflictDescription { get; set; }

    }
}
