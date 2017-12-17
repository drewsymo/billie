# billie

## Getting Started

1. Clone the repository `git clone git@github.com/drewsymo/billie`
2. Copy `.env.example` to `.env` and configure the settings
3. Run `yarn install`
4. Start the application by running `yarn watch`
5. By default the application is available at `http://localhost:3000`

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
