import MapEmbed from "../layouts/MapEmbed";

function GoogleMap() {
    return (
        <div className="p-8">
            <section id="googlemap">
                <h1 className="text-2xl font-bold pt-4 pb-10 text-center">Our Location</h1>
            </section>
            <MapEmbed />
        </div>
    );
}

export default GoogleMap;
