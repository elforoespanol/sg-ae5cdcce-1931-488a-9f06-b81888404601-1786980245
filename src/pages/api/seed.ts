import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sup
...
 : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}