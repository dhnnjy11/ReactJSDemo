using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactJSDemo.Models;

namespace ReactJSDemo.Controllers
{
    public class HomeController : Controller
    {
        public static readonly IList<CommentModel> _comments;

        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel()
                {
                    text="this is first comment"
                },
                new CommentModel()
                {
                    text="this is second comment"
                },
                new CommentModel()
                {
                    text = "this is third comment"
                }
            };
        }

        [Route("comments")]//envoke when /comments will enter in browser
        [ResponseCache(Location = ResponseCacheLocation.None,NoStore =true)]//for not caching data by browser
        public IActionResult Comments()
        {            
            return Json(_comments);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}