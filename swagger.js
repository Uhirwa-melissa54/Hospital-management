const swaggerJsdoc = {
  openapi: "3.0.0",
  info: {
    title: "Simple Hospital API",
    version: "1.0.0",
    description: "API for managing hospital patients",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server",
    },
  ],
  paths: {
    "/patients": {
      get: {
        summary: "Get all patients",
        tags: ["Patients"],
        responses: {
          200: {
            description: "List of all patients",
          },
          500: {
            description: "Server error",
          },
        },
      },
      post: {
        summary: "Create a new patient",
        tags: ["Patients"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  department: { type: "string" },
                  disease: { type: "string" },
                  id: { type: "integer" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Patient created successfully",
          },
          400: {
            description: "Invalid input data",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
    "/patients/{id}": {
      get: {
        summary: "Get a patient by ID",
        tags: ["Patients"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: {
            description: "Patient found",
          },
          404: {
            description: "Patient not found",
          },
          500: {
            description: "Server error",
          },
        },
      },
      put: {
        summary: "Update a patient by ID",
        tags: ["Patients"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  age: { type: "integer" },
                  address: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Patient updated successfully",
          },
          400: {
            description: "Invalid input data",
          },
          404: {
            description: "Patient not found",
          },
          500: {
            description: "Server error",
          },
        },
      },
      delete: {
        summary: "Delete a patient by ID",
        tags: ["Patients"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: {
            description: "Patient deleted",
          },
          404: {
            description: "Patient not found",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
  },
};

module.exports = swaggerJsdoc;
