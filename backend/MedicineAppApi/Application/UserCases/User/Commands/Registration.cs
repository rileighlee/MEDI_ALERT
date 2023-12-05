using Application.Interfaces;
using Mapster;
using MediatR;

namespace MedicineAppApi.Application.UserCases.User.Commands
{
    public class Registration
    {
        public record Command(string FullName, DateTime DateOfBirth, string ContactNumber, string Email, string Password) : IRequest<Result>;
        public record Result(string RecoveryPhrase);
        public record Handler(ICryptography Cryptography, IApplicationDbContext ApplicationDbContext) : IRequestHandler<Command, Result>
        {
            public async Task<Result> Handle(Command command, CancellationToken cancellationToken)
            {
                try
                {
                    // Convert the command to a user entity.
                    var user = command.Adapt<Domain.User>();


                    // Encrypt the password.
                    user.Password = Cryptography.Encrypt(command.Password);

                    user.RecoveryPhrase = Cryptography.Encrypt(command.FullName + command.Password + command.DateOfBirth);

                    // Add the user to the database.
                    var data = ApplicationDbContext.Users.Add(user);

                    // Save changes to the database.
                    await ApplicationDbContext.SaveChangesAsync(cancellationToken);

                    // Return the result of the registration operation.
                    return new Result(user.RecoveryPhrase);
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }
}
