
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchBar from "./Components/SearchBar";
import IconGrid from "./Components/IconGrid";
import ExportModal from "./Components/ExportModal";

function App() {
    const [icons, setIcons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(null);

    const [favourites, setFavourites] = useState(() => {
        const saved = localStorage.getItem('svg_favourites');
        return saved ? JSON.parse(saved) : [];
    });
    const [showFavourites, setShowFavourites] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const displayedIcons = showFavourites ? favourites : icons;

    useEffect(() => {
        localStorage.setItem('svg_favourites', JSON.stringify(favourites));
    }, [favourites]);

    const toggleFavourite = (iconName) => {
        setFavourites(prev =>
            prev.includes(iconName)
            ? prev.filter(item => item !== iconName)
            : [...prev, iconName]
        );
    };

    const fetchIcons = useCallback(async (query) => {
        setLoading(true);
        try {
            const response = await 
                axios.get(`https://api.iconify.design/search?query=${query}`);

            setIcons(response.data.icons || []);
            setHasSearched(true);
        }
        catch (error) {
            console.error("Error fetching icons:", error);
            setHasSearched(true);
        }
        finally {
            setLoading(false);
        }
    }, []);
    const closeModal = () => setSelectedIcon(null);
/* ------------------------------------------------------------------------- */
    return(
        <div className="app-wrapper">
            <Header />
            <main className="app-container">
                {!showFavourites && <SearchBar onSearch={fetchIcons} />}
                <div className="view-controls">
                    <button
                        className={`view-toggle ${!showFavourites ? 'active' : ''}`}
                        onClick={() => setShowFavourites(false)}
                    >
                        Search
                    </button>

                    <button
                        className={`view-toggle ${showFavourites ? 'active' : ''}`}
                        onClick={() => setShowFavourites(true)}
                    >
                        My Favourites ({favourites.length})
                    </button>
                </div>
                
                {showFavourites && favourites.length === 0 && (
                    <p className="no-favs-message">You haven't saved any favorites yet. Start searching and click the heart! ❤️</p>
                )}

                
                {loading ? (<p>Loading icons...</p>) :
                            (<IconGrid
                                icons={displayedIcons}
                                onSelect={setSelectedIcon}
                                favourites={favourites}
                                onToggleFavourite={toggleFavourite}
                                hasSearched={hasSearched}
                            />)}
            </main>
            <Footer />
            {selectedIcon && (
                <ExportModal
                    iconName={selectedIcon}
                    onClose={closeModal} 
                />
            )}
        </div>
    );
}

export default App
