_c.config = {

    // custom context menu (dropdown) options
    contextmenu: {
        rotate: {
            text: 'rotate',
            icon: 'rotate_right',
            condition: (item) => item.browser_image,
            // href: (item) => {},
            action: (item) => _h.popup(null, null, null, item.url_path)
        }
    }

    // download_dir options
    download_dir: {
        javascript: true, // Use the Javascript downloads API to download zip files
        current_dir_only: true // Only assign download dir button to current directory
    },

    // favicon
    // Add your own encoded inline favicon or false to disable / SVG https://yoksel.github.io/url-encoder/
    favicon: "<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2337474F' d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E\" type=\"image/svg+xml\" />",

    // history_scroll / attempts to restore scroll position on browser history navigation
    history_scroll: true,

    // custom language options
    lang: {

        // assign language menu in topbar / true = all / false = no menu (default)
        menu: ['pt', 'en', 'zh'], // Portuguese, English, Chinese

        // override or create new languages
        langs: {
            fr: {
                logout: 'déconnexion'
            },
            no: {
                date: 'dato',
                flag: 'no'
            }
        }
    },

    // load_svg_max_filesize 100kb / because complex SVG vector files will slow down rendering in browser
    load_svg_max_filesize: 100000,

    // panorama options
    panorama: {
        // function to detect panorama equirectangular source file
        is_pano: (item) => {
            var d = item.dimensions;
            // >=2048px && ratio 2:1 with 1% pixel margin
            return d[0] >= 2048 && Math.abs(d[0]/d[1] - 2) < 0.01;
        }
    },

    // popup options
    popup: {
        captionEl: true, // show popup caption
        caption_hide: true, // Auto-hide popup caption on mouse inactivity
        caption_style: 'block', // caption style: block, box, subtitles, gradient, topbar, none
        caption_align: 'center-left', // caption align: left, center-left, center, right
        click: 'prev_next', // popup click: prev_next, next, zoom
        zoomEl: false, // show zoom button
        playEl: false, // show slideshow play button
        transition: 'glide', // slideshow transition: none, slide, glide, fade, zoom, pop, elastic
        play_transition: null, // assign transition for slideshow (same as above). Inherits main transition by default
        bgOpacity: .95, // background opacity
        play_interval: 5000, // slideshow play interval
        loop: false, // loop slideshow
        transitions: { // custom transitions Object
            mytransition: function(dir){
                return {
                    translateX: [10 * dir, 0],
                  opacity: [.1, 1],
                  duration: 1000,
                  easing: 'easeOutQuart'
                }
            }
        }
    },

    // custom page <title> function / below is default
    title: (path, name, error, count) => {
        return (name || '/') + (error ? '' : ' [' + count + ']');
    },

    // uppy uploader interface options
    uppy: {
        note: 'Upload images only, maximum %upload_max_filesize%',
        locale: '' // https://github.com/transloadit/uppy/tree/main/packages/%40uppy/locales/src
        DropTarget: false,
        Webcam: false, // https://uppy.io/docs/webcam/
        ImageEditor: { // https://uppy.io/docs/image-editor/
          quality: 0.8,
          cropperOptions: {},
          actions: {}
        }
    },
}