using APIRunner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace APIRunner.Controllers
{
    [RoutePrefix("api/Runners")]
    public class RunnerController : ApiController
    {
        public static Random random = new Random();

        private static Runner[] _runners;
        public static Runner[] Runners
        {
            get
            {
                if (_runners == null) // SINGLETON
                {
                    _runners = new Runner[]
                    {
                new Runner (1, "Illa"   , 2002),
                new Runner (2, "Alberto", 2003),
                new Runner (3, "Fer"    , 2004)
                    };
                }
                return _runners;
            }
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Runner> GetAllRunners()
        {
            return Runners;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetRunner(int id)
        {
            var runner = Runners.FirstOrDefault((p) => p.ID == id);
            if (runner == null)
            {
                return NotFound();
            }
            return Ok(string.Concat("Dorsal: ", runner.Dorsal, ", name: ", runner.Name, ", time: ", runner.Time, " minutes"));
        }
    }
}