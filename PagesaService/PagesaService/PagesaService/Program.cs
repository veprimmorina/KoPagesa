using Microsoft.EntityFrameworkCore;
using PagesaService;
using Stripe;
using PagesaService.Models;
using Stripe_Payments_Web_Api;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<PagesaContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));
StripeConfiguration.ApiKey = builder.Configuration["Stripe:SecretKey"];
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyAllowedOrigins",
                      policy =>
                      {
                          policy.WithOrigins("*");
                          policy.WithHeaders("*");
                          policy.WithMethods("*");
                          // add the allowed origins
                      });
});
builder.Services.AddStripeInfrastructure(builder.Configuration);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();
app.UseCors("MyAllowedOrigins");
app.UseAuthorization();

app.MapControllers();


app.Run();
