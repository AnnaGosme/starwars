import {rest} from "msw";
import mockFilms from "./mockResponses/mockFilms";
import mockPeople from "./mockResponses/mockPeople";
import mockPlanets from "./mockResponses/mockPlanets";

export const handlers = [
    rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockFilms)
        )
    }),
    rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockPeople)
        )
    }),
    rest.get("https://swapi.dev/api/planets/", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockPlanets)
        )
    }),
]