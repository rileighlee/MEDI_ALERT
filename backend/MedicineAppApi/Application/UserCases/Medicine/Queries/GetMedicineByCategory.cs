using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MedicineAppApi.Application.UserCases.Medicine.Queries
{
    public class GetMedicineByCategory
    {
        public record Query(int CategoryId) : IRequest<List<Domain.Medicine>>;
        public record Handler(IApplicationDbContext ApplicationDbContext) : IRequestHandler<Query, List<Domain.Medicine>>
        {
            public async Task<List<Domain.Medicine>> Handle(Query query, CancellationToken cancellationToken)
            {
                try
                {
                    var category = await ApplicationDbContext.Categories.SingleOrDefaultAsync(x => x.Id == query.CategoryId);

                    if (category == null) throw new Exception("Category doesn't exist.");

                    var medicine = await ApplicationDbContext.Medicines.Where(x => x.Category == category).Select(x => new Domain.Medicine
                    {
                        Description = x.Description,
                        Id = x.Id,
                        CategoryId = x.CategoryId,
                        DosageAndFrequency = x.DosageAndFrequency,
                        Name = x.Name,
                        Overdosage = x.Overdosage,
                        Precautions = x.Precautions
                    }).ToListAsync();

                    return medicine;
                }
                catch (Exception)
                {

                    throw;
                }
            }
        }
    }
}
