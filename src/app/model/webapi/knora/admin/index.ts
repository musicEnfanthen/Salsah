/*
 * Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
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
 */

/**
 * Interfaces for groups
 */
export * from './groups/group';
export * from './groups/group-response';
export * from './groups/groups-response';


/**
 * Interface for lists
 */
export * from './lists/list';
export * from './lists/list-info';
export * from './lists/list-info-response';
export * from './lists/list-node';
export * from './lists/list-node-info';
export * from './lists/list-node-info-response';
export * from './lists/list-response';
export * from './lists/lists-response';
export * from './lists/list-create-payload';


/**
 * Interface for ontologies
 */
export * from './ontologies/ontology-info-short';


/**
 * Interfaces for permissions
 */
export * from './permissions/permission-data'


/**
 * Interfaces for projects
 */
export * from './projects/project';
export * from './projects/project-members-response';
export * from './projects/project-response';
export * from './projects/projects-response';


/**
 * Interfaces for store
 */
export * from './store/rdf-data-object';
export * from './store/reset-triplestore-content-response';


/**
 * Interfaces for users
 */
export * from './users/users-response';
export * from './users/user-response';
export * from './users/user';
