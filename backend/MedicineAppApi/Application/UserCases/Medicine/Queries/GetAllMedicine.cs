using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MedicineAppApi.Application.UserCases.Medicine.Queries
{
    public class GetAllMedicine
    {
        public record Query() : IRequest<List<Domain.Medicine>>;
        public record Handler(IApplicationDbContext ApplicationDbContext) : IRequestHandler<Query, List<Domain.Medicine>>
        {
            public async Task<List<Domain.Medicine>> Handle(Query query, CancellationToken cancellationToken)
            {
                try
                {
                    var medicine = await ApplicationDbContext.Medicines.ToListAsync();

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
