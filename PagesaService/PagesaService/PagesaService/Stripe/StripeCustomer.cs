﻿namespace PagesaService.Stripe
{
    public record StripeCustomer(
         string Name,
         string Email,
         string CustomerId);
}
