import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes : ["/", "/menu", "/contact"]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
