/** @format */

export const type = {
	MAPPED: 'MAPPED',
	REGISTERED: 'REGISTERED',
	SITE_REDIRECT: 'SITE_REDIRECT',
	WPCOM: 'WPCOM',
	TRANSFER: 'TRANSFER',
};

export const transferStatus = {
	PENDING_OWNER: 'PENDING_OWNER',
	PENDING_REGISTRY: 'PENDING_REGISTRY',
	CANCELLED: 'CANCELLED',
	COMPLETED: 'COMPLETED',
	PENDING_START: 'PENDING_START',
};

export const registrar = {
	OPENHRS: 'OpenHRS',
	OPENSRS: 'OpenSRS',
	WWD: 'WWD',
	MAINTENANCE: 'Registrar TLD Maintenance',
};

export const domainAvailability = {
	AVAILABLE: 'available',
	BLACKLISTED: 'blacklisted_domain',
	EMPTY_QUERY: 'empty_query',
	EMPTY_RESULTS: 'empty_results',
	FORBIDDEN: 'forbidden_domain',
	FORBIDDEN_SUBDOMAIN: 'forbidden_subdomain',
	INVALID: 'invalid_domain',
	INVALID_QUERY: 'invalid_query',
	INVALID_TLD: 'invalid_tld',
	MAINTENANCE: 'tld_in_maintenance',
	MAPPABLE: 'mappable',
	MAPPED: 'mapped_domain',
	MAPPED_OTHER_SITE_SAME_USER: 'mapped_to_other_site_same_user',
	MAPPED_SAME_SITE_NOT_TRANSFERRABLE: 'mapped_to_same_site_not_transferrable',
	MAPPED_SAME_SITE_TRANSFERRABLE: 'mapped_to_same_site_transferrable',
	NOT_AVAILABLE: 'not_available',
	NOT_REGISTRABLE: 'available_but_not_registrable',
	PURCHASES_DISABLED: 'domain_registration_unavailable',
	RECENTLY_UNMAPPED: 'recently_mapped',
	RECENTLY_EXPIRED: 'recently_expired',
	REGISTERED: 'registered_domain',
	REGISTERED_OTHER_SITE_SAME_USER: 'registered_on_other_site_same_user',
	REGISTERED_SAME_SITE: 'registered_on_same_site',
	RESTRICTED: 'restricted_domain',
	TLD_NOT_SUPPORTED: 'tld_not_supported',
	TLD_NOT_SUPPORTED_TEMPORARILY: 'tld_not_supported_temporarily',
	TRANSFER_PENDING: 'transfer_pending',
	TRANSFER_PENDING_SAME_USER: 'transfer_pending_same_user',
	TRANSFERRABLE: 'transferrable',
	UNKNOWN: 'unknown',
	UNKOWN_ACTIVE: 'unknown_active_domain_with_wpcom',
};

export const dnsTemplates = {
	G_SUITE: {
		PROVIDER: 'g-suite',
		SERVICE: 'G-Suite',
	},
	MICROSOFT_OFFICE365: {
		PROVIDER: 'microsoft-office365',
		SERVICE: 'O365',
	},
	ZOHO_MAIL: {
		PROVIDER: 'zoho-mail',
		SERVICE: 'Zoho',
	},
};

export const domainProductSlugs = {
	TRANSFER_IN: 'domain_transfer',
	TRANSFER_IN_PRIVACY: 'domain_transfer_privacy',
};

export const gdprConsentStatus = {
	NONE: 'NONE',
	PENDING: 'PENDING',
	PENDING_ASYNC: 'PENDING_ASYNC',
	ACCEPTED_CONTRACTUAL_MINIMUM: 'ACCEPTED_CONTRACTUAL_MINIMUM',
	ACCEPTED_FULL: 'ACCEPTED_FULL',
	DENIED: 'DENIED',
	FORCED_ALL_CONTRACTUAL: 'FORCED_ALL_CONTRACTUAL',
};
