using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MedicineAppApi.Application.UserCases.Category.Queries
{
    public class GetAllCategoriesWithMedicines
    {
        public record Query() : IRequest<List<Domain.Category>>;
        public record Handler(IApplicationDbContext ApplicationDbContext) : IRequestHandler<Query, List<Domain.Category>>
        {
            public async Task<List<Domain.Category>> Handle(Query query, CancellationToken cancellationToken)
            {
                try
                {
                    var medicine = await ApplicationDbContext.Categories.Include(x => x.Medicines).Select(x => new Domain.Category { Name = x.Name, Description = x.Description, Id = x.Id, Medicines = x.Medicines.Select(y => new Domain.Medicine { Id = y.Id, Name = y.Name }).ToList() }).ToListAsync();

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
