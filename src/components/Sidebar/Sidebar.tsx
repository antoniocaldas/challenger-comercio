import { useEffect, useState } from "react";
import { ApiData, RecordNote } from "../../types/sidebar.types";
import "./sidebar.scss";

export const Sidebar = () => {
  const [data, setData] = useState<RecordNote[]>([]);
  const [visibleData, setVisibleData] = useState<RecordNote[]>([]);
  const [showAll, setShowAll] = useState(false);

  const updateVisibleData = (showAll: boolean, fullData: RecordNote[]) => {
    // Me permite calcular la mitad de la data
    const halfIndex = Math.ceil(fullData.length / 2);

    // Actualiza los datos visibles según el estado showAll y la posición de la mitad
    setVisibleData(showAll ? fullData : fullData.slice(0, halfIndex));
  };

  const handleToggleNews = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  const fetchData = async () => {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/63654b012b3499323bf58225"
    );
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const result: ApiData = await response.json();
    setData(result.record.notes);
  };
  //Aqui separo en dos useEffect la primera para poder realizar el fetching de datos ni bien se monte el componente
  useEffect(() => {
    fetchData();
  }, []);
  //El segundo es para que si showAll cambia entonces poder ver los elementos restantes
  useEffect(() => {
    updateVisibleData(showAll, data);
  }, [showAll, data]);

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">ÚLTIMAS NOTICIAS</h2>
      <ul className="sidebar__list">
        {visibleData.map((item) => (
          <li key={item.id} className="sidebar__item">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="sidebar__content__button">
        <button
          className={`sidebar__toggle-btn ${showAll ? "fade" : ""}`}
          onClick={handleToggleNews}
        >
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};
