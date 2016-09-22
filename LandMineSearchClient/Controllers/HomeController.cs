using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LandMineSearchClient.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Players()
        {
            return View();
        }

        public ActionResult Scenario()
        {
            return View();
        }
    }
}