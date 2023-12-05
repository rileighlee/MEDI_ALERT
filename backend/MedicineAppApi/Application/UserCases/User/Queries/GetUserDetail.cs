using Application.Extensions;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace MedicineAppApi.Application.UserCases.User.Queries
{
    public class GetUserDetail
    {
        public record Query() : IRequest<Domain.User>;
        public record Handler(IApplicationDbContext ApplicationDbContext, ClaimsPrincipal ClaimsPrincipal) : IRequestHandler<Query, Domain.User>
        {
            public async Task<Domain.User> Handle(Query query, CancellationToken cancellationToken)
            {
                try
                {
                    var userId = ClaimsPrincipal.GetUserId();
                    var medicine = await ApplicationDbContext.Users.SingleOrDefaultAsync(x => x.Id == userId);
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
