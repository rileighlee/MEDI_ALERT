using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MedicineAppApi.Application.UserCases.Medicine.Queries
{
    public class GetMedicineById
    {
        public record Query(int Id) : IRequest<Domain.Medicine>;
        public record Handler(IApplicationDbContext ApplicationDbContext) : IRequestHandler<Query, Domain.Medicine>
        {
            public async Task<Domain.Medicine> Handle(Query query, CancellationToken cancellationToken)
            {
                try
                {
                    var medicine = await ApplicationDbContext.Medicines.Include(x => x.Category).Where(x => x.Id == query.Id).SingleOrDefaultAsync();
                    if (medicine == null) throw new Exception("No medicine found.");
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
