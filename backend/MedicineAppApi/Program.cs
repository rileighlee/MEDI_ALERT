using Application.Interfaces;
using Infrastructure.Token;
using MedicineAppApi.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(
            options =>
                options.UseSqlServer(
                        "Server=localhost\\SQLEXPRESS;Database=MedicineAppApi;Trusted_Connection=True;",
                        b => b.MigrationsAssembly("MedicineAppApi")
            )
);

builder.Services.AddScoped<IApplicationDbContext, AppDbContext>();
builder.Services.AddScoped<ICryptography, Cryptography>();
builder.Services.AddScoped<ITokenClient>(x => ActivatorUtilities.CreateInstance<JwtToken>(x, new Jwt { ValidateAudience = true, Secret = "med-secret-jwt-token-2023", ValidateIssuer = true, ValidAudience = "api.med.com", ValidIssuer = "api.med.com" }));
builder.Services.AddMediatR(x => x.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
builder.Services.AddAuthentication(options =>
                    {
                        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    })
                    .AddJwtBearer(options =>
                    {
                        options.SaveToken = true;
                        options.RequireHttpsMetadata = false;

                        options.TokenValidationParameters = new TokenValidationParameters()
                        {
                            ValidateIssuer =  true,
                            ValidateAudience =  true,
                            ValidAudience = "api.med.com",
                            ValidIssuer = "api.med.com",
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("med-secret-jwt-token-2023"))
                        };
                    });

builder.Services.AddSwaggerGen(c =>
{
    c.CustomSchemaIds(type => type.FullName.Replace("+", "."));
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "MedicineApp.Api", Version = "v1" });
    
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                          new OpenApiSecurityScheme
                            {
                                Reference = new OpenApiReference
                                {
                                    Type = ReferenceType.SecurityScheme,
                                    Id = "Bearer"
                                }
                            },
                            new string[] {}

                    }
                });
});
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddControllersWithViews(); 
builder.Services.AddHttpContextAccessor();
builder.Services.AddTransient(provider =>
{
    return provider.GetService<IHttpContextAccessor>().HttpContext?.User;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors(builder => builder
       .AllowAnyHeader()
       .AllowAnyMethod()
       .AllowAnyOrigin()
    );


app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();


app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
