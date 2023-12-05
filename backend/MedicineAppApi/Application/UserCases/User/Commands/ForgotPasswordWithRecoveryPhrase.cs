using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace MedicineAppApi.Application.UserCases.User.Commands
{
    public class ForgotPasswordWithRecoveryPhrase
    {
        public record Command(string RecoveryPhrase, string Password) : IRequest<Unit>;
        public record Handler(IApplicationDbContext ApplicationDbContext, ICryptography Cryptography, ITokenClient TokenClient) : IRequestHandler<Command, Unit>
        {
            // Handles the login command and generates a token upon successful authentication.
            public async Task<Unit> Handle(Command command, CancellationToken cancellationToken)
            {
                var user = await ApplicationDbContext.Users.SingleOrDefaultAsync(x => x.RecoveryPhrase == command.RecoveryPhrase);

                if (user == null) throw new Exception("Invalid Recovery Phrase");

                var password = Cryptography.Encrypt(command.Password);
                user.Password = password;

                ApplicationDbContext.Update(user);
                await ApplicationDbContext.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
