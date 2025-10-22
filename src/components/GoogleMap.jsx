import MapEmbed from "../layouts/MapEmbed";

function GoogleMap() {
    return (
        <div className="p-8">
            <section id="googlemap">
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">Our Location</h2>
            </section>
            <MapEmbed />
        </div>
    );
}

export default GoogleMap;
