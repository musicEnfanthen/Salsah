/* Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Ivan Subotic, Benjamin Geer, Tobias Schweizer.
 * This file is part of SALSAH.
 * SALSAH is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * SALSAH is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * You should have received a copy of the GNU Affero General Public
 * License along with SALSAH.  If not, see <http://www.gnu.org/licenses/>.
 * */

/**
 * This module contains interfaces that are used by other modules (message components).
 * It does not represent a particular API V1 request or response format.
 */
export module basicMessageComponents {

    /**
     * Numeric code representing the result (success or failure) of an API operation.
     *
     * 0:   OK (Success)
     *
     * 1:   INVALID_REQUEST_METHOD
     *
     * 2:   CREDENTIALS_NOT_VALID
     *
     * 3:   NO_RIGHTS_FOR_OPERATION
     *
     * 4:   INTERNAL_SALSAH_ERROR
     *
     * 5:   NO_PROPERTIES
     *
     * 6:   NOT_IN_USERDATA
     *
     * 7:   RESOURCE_ID_MISSING
     *
     * 8:   UNKNOWN_VOCABULARY
     *
     * 9:   NOT_FOUND
     *
     * 10:  API_ENDPOINT_NOT_FOUND
     *
     * 11:  INVALID_REQUEST_TYPE
     *
     * 12:  PROPERTY_ID_MISSING
     *
     * 13:  NOT_YET_IMPLEMENTED
     *
     * 14:  COULD_NOT_OPEN_PROGRESS_FILE
     *
     * 15:  VALUE_ID_OR_RESTYPE_ID_MISSING
     *
     * 16:  HLIST_ALREADY_EXISTENT
     *
     * 17:  HLIST_NO_LABELS
     *
     * 18:  HLIST_NOT_EXISTING
     *
     * 19:  HLIST_NO_POSITION
     *
     * 20:  HLIST_INVALID_POSITION
     *
     * 21:  SELECTION_NO_LABELS
     *
     * 22:  SELECTION_ALREADY_EXISTENT
     *
     * 23:  SELECTION_MISSING_OR_INVALID_POSITION
     *
     * 24:  SELECTION_DELETE_FAILED
     *
     * 25:  SELECTION_NODE_ALREADY_EXISTENT
     *
     * 26:  GEONAMES_GEONAME_ID_EXISTING
     *
     * 27:  UPDATE_NOT_PERFORMED
     *
     * 28:  DUPLICATE_VALUE
     *
     * 29:  ONTOLOGY_CONSTRAINT
     *
     * 999: UNSPECIFIED_ERROR
     *
     */
    type KnoraStatusCode = integer;

    /**
     * Numeric code representing the user's rights on a Knora resource.
     *
     * 0: No rights
     *
     * 1: Restricted View Permission
     *
     * 2: View Permission
     *
     * 6: Modify Permission
     *
     * 7: Delete Permission
     *
     * 8: Change Rights Permission
     */
    export type KnoraRights = integer;

    /**
     * Obsolete
     *
     * String representing the user's permission on a resource.
     *
     * "OK": the user has sufficient permission to view the resource
     */
    export type KnoraAccess = string;

    /**
     * Basic members of the Knora API V1 response format.
     */
    export interface basicResponse {
        /**
         * Knora status code
         */
        status:KnoraStatusCode;

        /**
         * The current user's data
         */
        userdata:userdata;
    }

    /**
     * Represents a Knora project
     */
    interface projectItem {
        /**
         * Path to the project's files
         */
        basepath:string;

        /**
         * Project's short name
         */
        shortname:string;

        /**
         * Description of the project
         */
        description:string;

        /**
         * The project's logo
         */
        logo:string;

        /**
         * The project's IRI
         */
        id:KnoraIRI;

        /**
         * Keywords describing the project
         */
        keywords:string;

        /**
         * obsolete
         */
        rights:KnoraRights;

        /**
         * Project's long name
         */
        longname:string;
    }

    /**
     * Represents the current user's data
     */
    interface userdata {
        /**
         * User's email address
         */
        email:string;

        /**
         * User's unique name
         */
        username:string;

        /**
         * User's first name
         */
        firstname:string;

        /**
         * User's last name
         */
        lastname:string;

        /**
         * List of project descriptions the user is member of
         */
        projects_info:Array<projectItem>;

        /**
         * User's IRI
         */
        user_id:string;

        /**
         * User's preferred language
         */
        lang:string;

        /**
         * User's active project
         */
        active_project:string;

        /**
         * Session token
         */
        token:string;

        /**
         * List of project IRIs the user is member of
         */
        projects:Array<string>;

        /**
         * obsolete
         */
        password:string;
    }

    /**
     * Represents a range in the text.
     */
    interface standoffPosition {

        /**
         * Start position of the range
         */
        start: integer;

        /**
         * End psoition of the range
         */
        end: integer;

        /**
         * In case it is a hyperlink, this is the link's target
         */
        href?: URI;

        /**
         * In case it is an internal link, this is the referred resource's IRI
         */
        resid?: KnoraIRI;
    }

    /**
     * Represents the standoff information for a text value.
     */
    export interface textattr {
        /**
         * A map of attribute names to standoff positions.
         * For each attribute the standoff positions indicate in which ranges of the text the attribute occurs.
         */
        [index: string]: Array<standoffPosition>
    }

    /**
     * String must be a stringified [[textattr]] (using `JSON.stringify()`) that can pe parsed in a [[textattr]] using `JSON.parse()`.
     */
    type textattrStringified = string;

    /**
     * Represents a rich text value
     */
    interface richtext {
        /**
         * Mere string representation
         */
        utf8str:string;

        /**
         * Markup information in standoff format
         */
        textattr:textattrStringified;

        /**
         * References to Knora resources from the text
         */
        resource_reference:Array<basicMessageComponents.KnoraIRI>
    }

    /**
     * Represents a date value
     */
    interface date {
        /**
         * Start date in string format
         */
        dateval1:string;

        /**
         * End end in string format
         */
        dateval2:string;

        /**
         * Calendar used
         */
        calendar:string;

    }

    /**
     * Represents an interval value
     */
    interface interval {

        /**
         * Begin of the interval in seconds
         */
        timeval1: integer;

        /**
         * End ofg the interval in seconds
         */
        timeval2: integer;

    }

    /**
     * String must be a hexadecimal RGB color code, e.g. "#4169E1"
     */
    type color = string;

    /**
     * String must be a valid Knora IRI, e.g. "http://data.knora.org/c5058f3a".
     */
    export type KnoraIRI = string;

    /**
     * String must have the following format: (GREGORIAN|JULIAN):YYYY[-MM[-DD]][:YYYY[-MM[-DD]]]
     * E.g. an exact date like GREGORIAN:2015-12-03 or a period like GREGORIAN:2015-12-03:2015-12-04.
     * Dates may also have month or year precision, e.g. GREGORIAN:2015-12 (the whole month of december) or GREGORIAN:2015 (the whole year 2015).
     */
    type dateString = string;

    /**
     * An integer number (no fractions).
     */
    type integer = number;

    /**
     * A floating point number (may have fractions).
     */
    type decimal = number;

    /**
     * A string representing a URI
     */
    type URI = string;

    /**
     * A string representing a geometrical figure on a surface (2D).
     */
    type geometry = string;

    /**
     * A Knora List Node IRI
     */
    export type KnoraListNodeIRI = KnoraIRI;

    /**
     * A geoname identifier
     */
    type geoname = string;

    /**
     * Describes a Knora Value.
     * Either a simple type or a complex represented by an interface.
     */
    export type knoraValue = integer|decimal|boolean|richtext|interval|date|color|KnoraIRI|URI|geometry|geoname|KnoraListNodeIRI;

    export interface richtextValue {

        /**
         * A richtext value
         */
        richtext_value: richtext;

    }


    export interface linkValue {

        /**
         * A link to another Knora resource. Value must be a Knora IRI.
         */
        link_value: KnoraIRI;

    }


    export interface integerValue {

        /**
         * An integer value
         */
        int_value: integer;

    }


    export interface decimalValue {

        /**
         * A decimal value (floating point)
         */
        decimal_value: decimal;

    }

    export interface booleanValue {

        /**
         * A boolean value
         */
        boolean_value: boolean;

    }

    export interface uriValue {

        /**
         * A URI value
         */
        uri_value: URI;

    }

    export interface dateValue {

        /**
         * A date value.
         */
        date_value: dateString;
    }

    export interface colorValue {

        /**
         * A color value
         */
        color_value: color;
    }

    export interface geometryValue {

        /**
         * A geometry value representing a region on a 2D surface.
         */
        geom_value: geometry;
    }


    export interface hierarchicalListValue {

        /**
         * A list node IRI
         */
        hlist_value: KnoraListNodeIRI;

    }

    export interface intervalValue {

        /**
         * An interval value consisting of two time values
         */
        interval_value: Array<integer>;

    }


    export interface geonameValue {

        /**
         * A geoname value
         */
        geoname_value: geoname;

    }

    /**
     * Describes a file value (for GUI-case)
     */
    export interface createOrChangeFileValueRequest {

        /**
         * Describes a file value (for GUI-case)
         */
        file: {

            /**
             * The file's original name
             */
            originalFilename: string;

            /**
             * The original mime type of the file
             */
            originalMimeType: string;

            /**
             * The file's temporary name
             */
            filename: string;

        }
    }

    /**
     * Binary representation of a resource (location)
     */
    export interface locationItem {
        /**
         * Duration of a movie or an audio file
         */
        duration:number;

        /**
         * X dimension of an image representation
         */
        nx:number;

        /**
         * Y dimension of an image representation
         */
        ny:number;

        /**
         * Path to the binary representation
         */
        path:string;

        /**
         * Frames per second (movie)
         */
        fps:number;

        /**
         * Format of the binary representation
         */
        format_name:string;

        /**
         * Original file name of the binary representation (before import to Knora)
         */
        origname:string;

        /**
         * Protocol used
         */
        protocol:protocolOptions;
    }

    /**
     * Represents how a binary representation (location) can be accessed.
     * Either locally stored (file) or referenced from an external location (url)
     */
    type protocolOptions = "file" | "url";

}
