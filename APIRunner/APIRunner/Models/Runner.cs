using APIRunner.Controllers;

namespace APIRunner.Models
{
    public class Runner
    {
        private int _id;
        private string _name;
        private int _dorsal;
        private int _time;

        public int ID
        {
            get => _id;
            set => _id = value;
        }
        public string Name
        {
            get => _name;
            set => _name = value;
        }
        public int Dorsal
        {
            get => _dorsal;
            set => _dorsal = value;
        }
        public int Time
        {
            get => _time;
        }

        public Runner(int id, string name, int dorsal)
        {
            ID = id;
            Name = name;
            Dorsal = dorsal;

            _time = RunnerController.random.Next(41, 55);
        }
    }
}