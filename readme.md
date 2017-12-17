# billie

## Request Flow


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
