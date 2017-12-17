# billie

## Getting Started

1. Clone the repository `git clone git@github.com:drewsymo/billie.git`
2. Copy `.env.example` to `.env`
3. Run `yarn install`
4. Run the migrations `yarn migrate`
5. Start the application by running `yarn watch`

## API

### Auth

#### Get a bearer token

POST `api/v1/auth/token`

Body:

```
{
    "email": "email@example.org",
    "password": "secret"
}
```

### Listings

#### List listings

GET `api/v1/listings`

#### Get a listing

GET `api/v1/listings/:listingSlug`

#### Create a listing

POST `api/v1/listings`
