import { useEffect, useState } from "react";
import { ApiData, RecordNote } from "../../types/sidebar.types";
import "./sidebar.scss";
import { JSONAPI, StaticURL } from "../../types/url.types";

export const Sidebar = () => {
  const [dataNote, setDataNote] = useState<RecordNote[]>([]);
  const [showAll, setShowAll] = useState(false);

  //handle para cambiar el estado
  const handleToggleNews = () => setShowAll((prevShowAll) => !prevShowAll);
  //con ello puedo cambiar los datos que seran visibles colocando los datos por referencia ya no por useEffect
  const visibleData = showAll ? dataNote : dataNote?.slice(0, 5);
  const fetchData = async () => {
    const url: StaticURL = JSONAPI;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const result: ApiData = await response.json();
    setDataNote(result?.record?.notes);
  };

  // Hook para el fetching de datos ni bien se monte el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">ÚLTIMAS NOTICIAS</h2>
      <ul className="sidebar__list">
        {visibleData?.map((item) => (
          <li key={item?.id} className="sidebar__item">
            {item?.title}
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
