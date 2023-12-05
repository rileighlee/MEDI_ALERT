using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace MedicineAppApi.Application.UserCases.Medicine.Queries
{
    public class CheckInteraction
    {
        public record Query(int Id1, int Id2) : IRequest<Result>;
        public record Result(string? Interaction);
        public record Handler(IApplicationDbContext ApplicationDbContext) : IRequestHandler<Query, Result>
        {
            public async Task<Result> Handle(Query query, CancellationToken cancellationToken)
            {
                try
                {
                    var medicine = ApplicationDbContext.Interactions.Where(x => x.Medicine1Id == query.Id1 && x.Medicine2Id == query.Id2).ToList();
                    var medicine1 = ApplicationDbContext.Interactions.Where(x => x.Medicine1Id == query.Id2 && x.Medicine2Id == query.Id1).SingleOrDefault();
                    if(medicine1 != null) medicine.Add(medicine1);
                    string? conflict = medicine.SingleOrDefault() != null ? medicine.SingleOrDefault().ConflictDescription : null;
                    return new Result(conflict);
                }
                catch (Exception)
                {

                    throw;
                }
            }
        }
    }
}
