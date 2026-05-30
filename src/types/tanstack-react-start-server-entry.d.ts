declare module "@tanstack/react-start/server-entry" {
  type ServerEntry = {
    fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
  };

  const entry: ServerEntry;
  export default entry;
}