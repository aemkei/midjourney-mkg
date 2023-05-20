const testData = [
	{
		prompt:
			'a south korean woman wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, red neon light flower store in the background, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '1f91cf18-7d36-4edb-bdc9-7c05ccabd5cd',
		path: 'https://cdn.midjourney.com/1f91cf18-7d36-4edb-bdc9-7c05ccabd5cd/0_0.png',
	},
	{
		prompt:
			'a person wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, red neon light flower store in the background, photographed by Erik Madigan Heck, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '693f2e98-93c7-4bce-afe3-8c3851d74b1c',
		path: 'https://cdn.midjourney.com/693f2e98-93c7-4bce-afe3-8c3851d74b1c/0_0.png',
	},
	{
		prompt:
			'a person wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, red neon light flower store in the background, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: 'bc0dc166-af2f-412b-99fd-48c848eeb74f',
		path: 'https://cdn.midjourney.com/bc0dc166-af2f-412b-99fd-48c848eeb74f/0_0.png',
	},
	{
		prompt:
			'a person wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, red neon light flower store in the background, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '6c096ec0-b11e-43c3-925d-ac15e924aeaf',
		path: 'https://cdn.midjourney.com/6c096ec0-b11e-43c3-925d-ac15e924aeaf/0_0.png',
	},
	{
		prompt:
			'a south korean girl wearing an inflatable ice-block jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, flower store and red neon light in the background, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '341bd8c8-5e14-46e4-b354-c56cbc7b31bd',
		path: 'https://cdn.midjourney.com/341bd8c8-5e14-46e4-b354-c56cbc7b31bd/0_0.png',
	},
	{
		prompt:
			'a person wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, red neon light flower store in the background, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '923dc745-e8cf-4c6c-a211-0f20c5706e6f',
		path: 'https://cdn.midjourney.com/923dc745-e8cf-4c6c-a211-0f20c5706e6f/0_0.png',
	},
	{
		prompt:
			'a person wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, red neon light flower store in the background, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '5258c1bd-ba3f-4605-982a-1e72f160b1bc',
		path: 'https://cdn.midjourney.com/5258c1bd-ba3f-4605-982a-1e72f160b1bc/0_0.png',
	},
	{
		prompt:
			'a person wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '7fdac782-5840-47ff-9c83-1d427faf5665',
		path: 'https://cdn.midjourney.com/7fdac782-5840-47ff-9c83-1d427faf5665/0_0.png',
	},
	{
		prompt:
			'a south korean woman wearing a melting ice down-jacket filled with roses and light inside, inspired by Frozen Flowers from Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, photographed by Erik Madigan Heck, a burst of colour through red neon light in a flower store in the background, ice melting, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: 'b1e5021b-36fe-4e2f-90cc-58f7029be148',
		path: 'https://cdn.midjourney.com/b1e5021b-36fe-4e2f-90cc-58f7029be148/0_0.png',
	},
	{
		prompt:
			'a south korean woman wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, photographed by Erik Madigan Heck, a burst of colour through red neon light in the background, ice melting, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: '79f8465a-e2c6-4a5c-8431-ee09c7005dcd',
		path: 'https://cdn.midjourney.com/79f8465a-e2c6-4a5c-8431-ee09c7005dcd/0_0.png',
	},
	{
		prompt:
			'a south korean woman wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, photographed by Erik Madigan Heck, a burst of colour through red neon light in the background, ice melting, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: 'f01fd5d6-e70b-4637-8cf1-0504b8761c32',
		path: 'https://cdn.midjourney.com/f01fd5d6-e70b-4637-8cf1-0504b8761c32/0_0.png',
	},
	{
		prompt:
			'a south korean woman wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, photographed by Erik Madigan Heck, a burst of colour through red neon light in the background, ice melting, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: 'c98c48f7-bbde-4bd4-8e8d-e005f684324e',
		path: 'https://cdn.midjourney.com/c98c48f7-bbde-4bd4-8e8d-e005f684324e/0_0.png',
	},
	{
		prompt:
			'a person wearing an inflatable ice transparent glass jacket filled with roses and light inside, inspired by Japanese floral artist Azuma Makoto, the jacket is inspired by North Face and Raf Simons, photographed by David Sims, 80mm leica kodak-400, soft light, cinematic photography, ultra-high detail, natural photorealistic eyes, real skin texture, fine details, editorial photography, cinematic, perfect details, cinematography, depth of field, arri, panavision',
		id: 'f67bfdd8-2a6b-4630-b8d4-a6d85136eb31',
		path: 'https://cdn.midjourney.com/f67bfdd8-2a6b-4630-b8d4-a6d85136eb31/0_0.png',
	},
];
