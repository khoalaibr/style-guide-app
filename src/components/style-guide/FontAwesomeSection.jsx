import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  // Solid Icons
  faHome,
  faUser,
  faEnvelope,
  faPhone,
  faLock,
  faSearch,
  faCheck,
  faTimes,
  faExclamationTriangle,
  faInfoCircle,
  faQuestionCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faArrowLeft,
  faPlus,
  faMinus,
  faEdit,
  faPencil,
  faTrash,
  faCog,
  faGear,
  faBars,
  faEllipsisVertical,
  faCalendarDays,
  faClock,
  faImage,
  faVideo,
  faFile,
  faFileLines,
  faDownload,
  faUpload,
  faSave,
  faBookmark,
  faStar,
  faHeart,
  faThumbsUp,
  faThumbsDown,
  faComment,
  faComments,
  faShare,
  faLink,
  faGlobe,
  faMapMarker,
  faLocationDot,
  faShoppingCart,
  faTag,
  faTags,
  faDollarSign,
  faEuroSign,
  faCreditCard,
  faWallet,
  faBell,
  faFlag,
  faPrint,
  faCamera,
  faMicrophone,
  faVolumeUp,
  faVolumeMute,
  faPlay,
  faPause,
  faStop,
  faForward,
  faBackward,
  faRedo,
  faUndo,
  faSync,
  faSpinner,
  faCircleNotch,
  faLightbulb,
  faSun,
  faMoon,
  faCloudUpload,
  faCloudDownload,
  faWifi,
  faBluetooth,
  faBatteryFull,
  faBatteryHalf,
  faBatteryEmpty,
  faDesktop,
  faMobile,
  faTablet,
  faLaptop,
  faServer,
  faDatabase,
  faCode,
  faTerminal,
  faFilter,
  faSort,
  faSortUp,
  faSortDown,
  faList,
  faTable,
  faColumns,
  faGrip,
  faChartBar,
  faChartLine,
  faChartPie,
  faChartArea,
  faEye,
  faEyeSlash,
  faLock,
  faUnlock,
  faShield,
  faShieldAlt,
  faUserShield,
  faKey,
  faSignIn,
  faSignOut,
  faUserPlus,
  faUserMinus,
  faUsers,
  faUserGroup,
  faAddressBook,
  faAddressCard,
  faIdCard,
  faIdBadge,
  faBuilding,
  faCity,
  faIndustry,
  faUniversity,
  faHospital,
  faClinicMedical,
  faAmbulance,
  faMedkit,
  faPills,
  faPrescription,
  faStethoscope,
  faHeartbeat,
  faHeartPulse,
  faLungs,
  faBrain,
  faTooth,
  faEye,
  faEar,
  faHandHoldingMedical,
  faVirus,
  faViruses,
  faBacteria,
  faRadiation,
  faBiohazard,
  faSkull,
  faSkullCrossbones,
  faSmile,
  faFrown,
  faMeh,
  faLaugh,
  faSadTear,
  faAngry,
  faSurprise,
  faTired,
  faDizzy,
  faGrimace,
  faGrin,
  faGrinBeam,
  faGrinHearts,
  faGrinTears,
  faGrinTongue,
  faGrinWink,
  faKiss,
  faKissBeam,
  faKissWinkHeart,
  faLaughBeam,
  faLaughSquint,
  faLaughWink,
  faMehBlank,
  faMehRollingEyes,
  faSadCry,
  faSmileBeam,
  faSmileWink,
  faSurprise,
  faTired,
} from '@fortawesome/free-solid-svg-icons'

// Regular Icons
import {
  faUser as faUserRegular,
  faEnvelope as faEnvelopeRegular,
  faHeart as faHeartRegular,
  faStar as faStarRegular,
  faComment as faCommentRegular,
  faBookmark as faBookmarkRegular,
  faCircle as faCircleRegular,
  faSquare as faSquareRegular,
  faCheckSquare as faCheckSquareRegular,
  faFile as faFileRegular,
  faFolder as faFolderRegular,
  faCalendar as faCalendarRegular,
  faClock as faClockRegular,
  faEye as faEyeRegular,
  faThumbsUp as faThumbsUpRegular,
  faThumbsDown as faThumbsDownRegular,
  faLightbulb as faLightbulbRegular,
  faBell as faBellRegular,
  faFlag as faFlagRegular,
  faTrashCan as faTrashCanRegular,
  faImage as faImageRegular,
  faEdit as faEditRegular,
  faCopy as faCopyRegular,
  faSave as faSaveRegular,
  faShareSquare as faShareSquareRegular,
  faQuestionCircle as faQuestionCircleRegular,
  faInfoCircle as faInfoCircleRegular,
  faLifeRing as faLifeRingRegular,
  faSmile as faSmileRegular,
  faFrown as faFrownRegular,
  faMeh as faMehRegular,
} from '@fortawesome/free-regular-svg-icons'

// Brand Icons
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
  faSnapchat,
  faTiktok,
  faWhatsapp,
  faTelegram,
  faDiscord,
  faSlack,
  faGithub,
  faGitlab,
  faBitbucket,
  faJira,
  faConfluence,
  faTrello,
  faAsana,
  faFigma,
  faSketch,
  faInvision,
  faAdobe,
  faAws,
  faGoogle,
  faMicrosoft,
  faApple,
  faAndroid,
  faWindows,
  faLinux,
  faUbuntu,
  faDocker,
  faJenkins,
  faJava,
  faPython,
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faAngular,
  faVuejs,
  faNodeJs,
  faPhp,
  faLaravel,
  faWordpress,
  faDrupal,
  faJoomla,
  faMagento,
  faShopify,
  faWix,
  faSquarespace,
  faWoocommerce,
  faStripe,
  faPaypal,
  faAmazonPay,
  faApplePay,
  faGooglePay,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
  faCcPaypal,
  faCcStripe,
  faBtc,
  faEthereum,
  faUber,
  faAirbnb,
  faSpotify,
  faSoundcloud,
  faNetflix,
  faHulu,
  faImdb,
  faPlaystation,
  faXbox,
  faSteam,
  faTwitch,
  faKickstarter,
  faPatreon,
  faMedium,
  faReddit,
  faQuora,
  faStackOverflow,
  faWikipediaW,
  faYelp,
  faTripadvisor,
  faFoursquare,
} from '@fortawesome/free-brands-svg-icons'

const FontAwesomeSection = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  
  // Agrupar iconos por categoría
  const iconCategories = {
    solid: [
      { icon: faHome, name: 'faHome' },
      { icon: faUser, name: 'faUser' },
      { icon: faEnvelope, name: 'faEnvelope' },
      { icon: faPhone, name: 'faPhone' },
      { icon: faLock, name: 'faLock' },
      { icon: faSearch, name: 'faSearch' },
      { icon: faCheck, name: 'faCheck' },
      { icon: faTimes, name: 'faTimes' },
      { icon: faExclamationTriangle, name: 'faExclamationTriangle' },
      { icon: faInfoCircle, name: 'faInfoCircle' },
      { icon: faQuestionCircle, name: 'faQuestionCircle' },
      { icon: faChevronDown, name: 'faChevronDown' },
      { icon: faChevronUp, name: 'faChevronUp' },
      { icon: faChevronLeft, name: 'faChevronLeft' },
      { icon: faChevronRight, name: 'faChevronRight' },
      { icon: faArrowRight, name: 'faArrowRight' },
      { icon: faArrowLeft, name: 'faArrowLeft' },
      { icon: faPlus, name: 'faPlus' },
      { icon: faMinus, name: 'faMinus' },
      { icon: faEdit, name: 'faEdit' },
      { icon: faPencil, name: 'faPencil' },
      { icon: faTrash, name: 'faTrash' },
      { icon: faCog, name: 'faCog' },
      { icon: faGear, name: 'faGear' },
      { icon: faBars, name: 'faBars' },
      { icon: faEllipsisVertical, name: 'faEllipsisVertical' },
      { icon: faCalendarDays, name: 'faCalendarDays' },
      { icon: faClock, name: 'faClock' },
      { icon: faImage, name: 'faImage' },
      { icon: faVideo, name: 'faVideo' },
      { icon: faFile, name: 'faFile' },
      { icon: faFileLines, name: 'faFileLines' },
      { icon: faDownload, name: 'faDownload' },
      { icon: faUpload, name: 'faUpload' },
      { icon: faSave, name: 'faSave' },
      { icon: faBookmark, name: 'faBookmark' },
      { icon: faStar, name: 'faStar' },
      { icon: faHeart, name: 'faHeart' },
      { icon: faThumbsUp, name: 'faThumbsUp' },
      { icon: faThumbsDown, name: 'faThumbsDown' },
      { icon: faComment, name: 'faComment' },
      { icon: faComments, name: 'faComments' },
      { icon: faShare, name: 'faShare' },
      { icon: faLink, name: 'faLink' },
      { icon: faGlobe, name: 'faGlobe' },
      { icon: faLocationDot, name: 'faLocationDot' },
      { icon: faShoppingCart, name: 'faShoppingCart' },
      { icon: faTag, name: 'faTag' },
      { icon: faTags, name: 'faTags' },
      { icon: faDollarSign, name: 'faDollarSign' },
      { icon: faEuroSign, name: 'faEuroSign' },
      { icon: faCreditCard, name: 'faCreditCard' },
      { icon: faWallet, name: 'faWallet' },
      { icon: faBell, name: 'faBell' },
      { icon: faFlag, name: 'faFlag' },
      { icon: faPrint, name: 'faPrint' },
      { icon: faCamera, name: 'faCamera' },
      { icon: faMicrophone, name: 'faMicrophone' },
      { icon: faVolumeUp, name: 'faVolumeUp' },
      { icon: faVolumeMute, name: 'faVolumeMute' },
      { icon: faPlay, name: 'faPlay' },
      { icon: faPause, name: 'faPause' },
      { icon: faStop, name: 'faStop' },
      { icon: faForward, name: 'faForward' },
      { icon: faBackward, name: 'faBackward' },
      { icon: faRedo, name: 'faRedo' },
      { icon: faUndo, name: 'faUndo' },
      { icon: faSync, name: 'faSync' },
      { icon: faSpinner, name: 'faSpinner' },
      { icon: faCircleNotch, name: 'faCircleNotch' },
      { icon: faLightbulb, name: 'faLightbulb' },
      { icon: faSun, name: 'faSun' },
      { icon: faMoon, name: 'faMoon' },
      { icon: faCloudUpload, name: 'faCloudUpload' },
      { icon: faCloudDownload, name: 'faCloudDownload' },
      { icon: faWifi, name: 'faWifi' },
      { icon: faBluetooth, name: 'faBluetooth' },
      { icon: faBatteryFull, name: 'faBatteryFull' },
      { icon: faBatteryHalf, name: 'faBatteryHalf' },
      { icon: faBatteryEmpty, name: 'faBatteryEmpty' },
      { icon: faDesktop, name: 'faDesktop' },
      { icon: faMobile, name: 'faMobile' },
      { icon: faTablet, name: 'faTablet' },
      { icon: faLaptop, name: 'faLaptop' },
      { icon: faServer, name: 'faServer' },
      { icon: faDatabase, name: 'faDatabase' },
      { icon: faCode, name: 'faCode' },
      { icon: faTerminal, name: 'faTerminal' },
      { icon: faFilter, name: 'faFilter' },
      { icon: faSort, name: 'faSort' },
      { icon: faSortUp, name: 'faSortUp' },
      { icon: faSortDown, name: 'faSortDown' },
      { icon: faList, name: 'faList' },
      { icon: faTable, name: 'faTable' },
      { icon: faColumns, name: 'faColumns' },
      { icon: faGrip, name: 'faGrip' },
      { icon: faChartBar, name: 'faChartBar' },
      { icon: faChartLine, name: 'faChartLine' },
      { icon: faChartPie, name: 'faChartPie' },
      { icon: faChartArea, name: 'faChartArea' },
      { icon: faEye, name: 'faEye' },
      { icon: faEyeSlash, name: 'faEyeSlash' },
      { icon: faUnlock, name: 'faUnlock' },
      { icon: faShield, name: 'faShield' },
      { icon: faShieldAlt, name: 'faShieldAlt' },
      { icon: faUserShield, name: 'faUserShield' },
      { icon: faKey, name: 'faKey' },
      { icon: faSignIn, name: 'faSignIn' },
      { icon: faSignOut, name: 'faSignOut' },
      { icon: faUserPlus, name: 'faUserPlus' },
      { icon: faUserMinus, name: 'faUserMinus' },
      { icon: faUsers, name: 'faUsers' },
      { icon: faUserGroup, name: 'faUserGroup' },
    ],
    regular: [
      { icon: faUserRegular, name: 'faUserRegular' },
      { icon: faEnvelopeRegular, name: 'faEnvelopeRegular' },
      { icon: faHeartRegular, name: 'faHeartRegular' },
      { icon: faStarRegular, name: 'faStarRegular' },
      { icon: faCommentRegular, name: 'faCommentRegular' },
      { icon: faBookmarkRegular, name: 'faBookmarkRegular' },
      { icon: faCircleRegular, name: 'faCircleRegular' },
      { icon: faSquareRegular, name: 'faSquareRegular' },
      { icon: faCheckSquareRegular, name: 'faCheckSquareRegular' },
      { icon: faFileRegular, name: 'faFileRegular' },
      { icon: faFolderRegular, name: 'faFolderRegular' },
      { icon: faCalendarRegular, name: 'faCalendarRegular' },
      { icon: faClockRegular, name: 'faClockRegular' },
      { icon: faEyeRegular, name: 'faEyeRegular' },
      { icon: faThumbsUpRegular, name: 'faThumbsUpRegular' },
      { icon: faThumbsDownRegular, name: 'faThumbsDownRegular' },
      { icon: faLightbulbRegular, name: 'faLightbulbRegular' },
      { icon: faBellRegular, name: 'faBellRegular' },
      { icon: faFlagRegular, name: 'faFlagRegular' },
      { icon: faTrashCanRegular, name: 'faTrashCanRegular' },
      { icon: faImageRegular, name: 'faImageRegular' },
      { icon: faEditRegular, name: 'faEditRegular' },
      { icon: faCopyRegular, name: 'faCopyRegular' },
      { icon: faSaveRegular, name: 'faSaveRegular' },
      { icon: faShareSquareRegular, name: 'faShareSquareRegular' },
      { icon: faQuestionCircleRegular, name: 'faQuestionCircleRegular' },
      { icon: faInfoCircleRegular, name: 'faInfoCircleRegular' },
      { icon: faLifeRingRegular, name: 'faLifeRingRegular' },
      { icon: faSmileRegular, name: 'faSmileRegular' },
      { icon: faFrownRegular, name: 'faFrownRegular' },
      { icon: faMehRegular, name: 'faMehRegular' },
    ],
    brands: [
      { icon: faTwitter, name: 'faTwitter' },
      { icon: faFacebook, name: 'faFacebook' },
      { icon: faInstagram, name: 'faInstagram' },
      { icon: faLinkedin, name: 'faLinkedin' },
      { icon: faYoutube, name: 'faYoutube' },
      { icon: faPinterest, name: 'faPinterest' },
      { icon: faSnapchat, name: 'faSnapchat' },
      { icon: faTiktok, name: 'faTiktok' },
      { icon: faWhatsapp, name: 'faWhatsapp' },
      { icon: faTelegram, name: 'faTelegram' },
      { icon: faDiscord, name: 'faDiscord' },
      { icon: faSlack, name: 'faSlack' },
      { icon: faGithub, name: 'faGithub' },
      { icon: faGitlab, name: 'faGitlab' },
      { icon: faBitbucket, name: 'faBitbucket' },
      { icon: faJira, name: 'faJira' },
      { icon: faConfluence, name: 'faConfluence' },
      { icon: faTrello, name: 'faTrello' },
      { icon: faAsana, name: 'faAsana' },
      { icon: faFigma, name: 'faFigma' },
      { icon: faSketch, name: 'faSketch' },
      { icon: faInvision, name: 'faInvision' },
      { icon: faAdobe, name: 'faAdobe' },
      { icon: faAws, name: 'faAws' },
      { icon: faGoogle, name: 'faGoogle' },
      { icon: faMicrosoft, name: 'faMicrosoft' },
      { icon: faApple, name: 'faApple' },
      { icon: faAndroid, name: 'faAndroid' },
      { icon: faWindows, name: 'faWindows' },
      { icon: faLinux, name: 'faLinux' },
      { icon: faUbuntu, name: 'faUbuntu' },
      { icon: faDocker, name: 'faDocker' },
      { icon: faJenkins, name: 'faJenkins' },
      { icon: faJava, name: 'faJava' },
      { icon: faPython, name: 'faPython' },
      { icon: faJs, name: 'faJs' },
      { icon: faHtml5, name: 'faHtml5' },
      { icon: faCss3, name: 'faCss3' },
      { icon: faReact, name: 'faReact' },
      { icon: faAngular, name: 'faAngular' },
      { icon: faVuejs, name: 'faVuejs' },
      { icon: faNodeJs, name: 'faNodeJs' },
      { icon: faPhp, name: 'faPhp' },
      { icon: faLaravel, name: 'faLaravel' },
      { icon: faWordpress, name: 'faWordpress' },
      { icon: faDrupal, name: 'faDrupal' },
      { icon: faJoomla, name: 'faJoomla' },
      { icon: faMagento, name: 'faMagento' },
      { icon: faShopify, name: 'faShopify' },
      { icon: faWix, name: 'faWix' },
      { icon: faSquarespace, name: 'faSquarespace' },
      { icon: faWoocommerce, name: 'faWoocommerce' },
      { icon: faStripe, name: 'faStripe' },
      { icon: faPaypal, name: 'faPaypal' },
      { icon: faAmazonPay, name: 'faAmazonPay' },
      { icon: faApplePay, name: 'faApplePay' },
      { icon: faGooglePay, name: 'faGooglePay' },
      { icon: faCcVisa, name: 'faCcVisa' },
      { icon: faCcMastercard, name: 'faCcMastercard' },
      { icon: faCcAmex, name: 'faCcAmex' },
      { icon: faCcDiscover, name: 'faCcDiscover' },
      { icon: faCcPaypal, name: 'faCcPaypal' },
      { icon: faCcStripe, name: 'faCcStripe' },
      { icon: faBtc, name: 'faBtc' },
      { icon: faEthereum, name: 'faEthereum' },
    ],
  }

  // Filtrar iconos según la búsqueda y categoría seleccionada
  const getFilteredIcons = () => {
    let icons = []
    
    if (selectedCategory === 'all') {
      icons = [
        ...iconCategories.solid,
        ...iconCategories.regular,
        ...iconCategories.brands,
      ]
    } else {
      icons = iconCategories[selectedCategory]
    }
    
    if (searchTerm) {
      return icons.filter(icon => 
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return icons
  }

  const filteredIcons = getFilteredIcons()

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Font Awesome Icons</h2>
      <p className="text-muted-foreground">
        Font Awesome proporciona una amplia biblioteca de iconos vectoriales escalables que se pueden personalizar fácilmente
        con CSS. Esta sección muestra cómo integrar y utilizar Font Awesome en tus proyectos React.
      </p>

      {/* Introducción */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Integración con React</h3>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p>
                Para utilizar Font Awesome en tu proyecto React, necesitas instalar los siguientes paquetes:
              </p>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                <p>npm install --save @fortawesome/fontawesome-svg-core</p>
                <p>npm install --save @fortawesome/free-solid-svg-icons</p>
                <p>npm install --save @fortawesome/free-regular-svg-icons</p>
                <p>npm install --save @fortawesome/free-brands-svg-icons</p>
                <p>npm install --save @fortawesome/react-fontawesome</p>
              </div>
              <p>
                Luego, puedes importar y utilizar los iconos en tus componentes:
              </p>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                <p>import {'{'} FontAwesomeIcon {'}'} from '@fortawesome/react-fontawesome'</p>
                <p>import {'{'} faUser, faEnvelope {'}'} from '@fortawesome/free-solid-svg-icons'</p>
                <p>import {'{'} faHeart {'}'} from '@fortawesome/free-regular-svg-icons'</p>
                <p>import {'{'} faTwitter, faFacebook {'}'} from '@fortawesome/free-brands-svg-icons'</p>
                <br />
                <p>{'<FontAwesomeIcon icon={faUser} />'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Buscador de Iconos */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Explorador de Iconos</h3>
        <Card>
          <CardHeader>
            <CardTitle>Busca y explora iconos</CardTitle>
            <CardDescription>
              Encuentra el icono perfecto para tu proyecto entre más de 200 opciones.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar iconos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('all')}
                    className="flex-1 sm:flex-none"
                  >
                    Todos
                  </Button>
                  <Button
                    variant={selectedCategory === 'solid' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('solid')}
                    className="flex-1 sm:flex-none"
                  >
                    Solid
                  </Button>
                  <Button
                    variant={selectedCategory === 'regular' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('regular')}
                    className="flex-1 sm:flex-none"
                  >
                    Regular
                  </Button>
                  <Button
                    variant={selectedCategory === 'brands' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('brands')}
                    className="flex-1 sm:flex-none"
                  >
                    Brands
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                {filteredIcons.map((iconData, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <FontAwesomeIcon icon={iconData.icon} className="h-6 w-6 mb-2" />
                    <span className="text-xs text-center truncate w-full">{iconData.name}</span>
                  </div>
                ))}
              </div>

              {filteredIcons.length === 0 && (
                <div className="text-center py-8">
                  <FontAwesomeIcon icon={faSearch} className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No se encontraron iconos que coincidan con tu búsqueda.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ejemplos de Uso */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ejemplos de Uso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tamaños</CardTitle>
              <CardDescription>Controla el tamaño de los iconos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="h-3 w-3 mb-1" />
                  <span className="text-xs">xs</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="h-4 w-4 mb-1" />
                  <span className="text-xs">sm</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="h-5 w-5 mb-1" />
                  <span className="text-xs">md</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="h-6 w-6 mb-1" />
                  <span className="text-xs">lg</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="h-8 w-8 mb-1" />
                  <span className="text-xs">xl</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="h-10 w-10 mb-1" />
                  <span className="text-xs">2xl</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="h-12 w-12 mb-1" />
                  <span className="text-xs">3xl</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Colores</CardTitle>
              <CardDescription>Aplica colores a los iconos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-red-500" />
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-green-500" />
                <FontAwesomeIcon icon={faExclamationTriangle} className="h-6 w-6 text-yellow-500" />
                <FontAwesomeIcon icon={faInfoCircle} className="h-6 w-6 text-blue-500" />
                <FontAwesomeIcon icon={faQuestionCircle} className="h-6 w-6 text-purple-500" />
                <FontAwesomeIcon icon={faBell} className="h-6 w-6 text-orange-500" />
                <FontAwesomeIcon icon={faTrash} className="h-6 w-6 text-destructive" />
                <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-gray-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">En Botones</CardTitle>
              <CardDescription>Combina iconos con texto en botones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button>
                  <FontAwesomeIcon icon={faPlus} className="mr-2 h-4 w-4" />
                  Añadir
                </Button>
                <Button variant="outline">
                  <FontAwesomeIcon icon={faEdit} className="mr-2 h-4 w-4" />
                  Editar
                </Button>
                <Button variant="destructive">
                  <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faDownload} className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
                <Button variant="ghost">
                  <FontAwesomeIcon icon={faShare} className="mr-2 h-4 w-4" />
                  Compartir
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Animaciones</CardTitle>
              <CardDescription>Iconos con animaciones CSS</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faSpinner} className="h-8 w-8 animate-spin" />
                  <span className="text-xs mt-2">spin</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faBell} className="h-8 w-8 animate-bounce" />
                  <span className="text-xs mt-2">bounce</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faArrowRight} className="h-8 w-8 animate-pulse" />
                  <span className="text-xs mt-2">pulse</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faSync} className="h-8 w-8 animate-spin" />
                  <span className="text-xs mt-2">spin</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Redes Sociales */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Iconos de Redes Sociales</h3>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 text-[#1DA1F2]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 text-[#4267B2]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-[#E1306C]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 text-[#0077B5]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 text-[#FF0000]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faPinterest} className="h-5 w-5 text-[#E60023]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faSnapchat} className="h-5 w-5 text-[#FFFC00]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 text-[#25D366]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faTelegram} className="h-5 w-5 text-[#0088cc]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faDiscord} className="h-5 w-5 text-[#5865F2]" />
              </Button>
              <Button variant="outline" className="h-10 w-10 p-0 rounded-full">
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ejemplo Práctico */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ejemplo Práctico: Formulario de Contacto</h3>
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
            <CardDescription>
              Ejemplo de uso de iconos en un formulario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre completo</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Juan Pérez" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Correo electrónico</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="ejemplo@correo.com" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Teléfono</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="+34 123 456 789" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensaje</label>
                <textarea
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">
                  <FontAwesomeIcon icon={faTimes} className="mr-2 h-4 w-4" />
                  Cancelar
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FontAwesomeSection

