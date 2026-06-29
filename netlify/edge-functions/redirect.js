export default async () => {
  return Response.redirect('https://www.brian-g.com/', 301);
};

export const config = {
  path: '/*',
};
