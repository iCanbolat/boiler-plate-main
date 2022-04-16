<?php

namespace App\Ldap;

use App\Models\User;
use Exception;

class TestConnection extends LdapConnection
{
    public function authenticate(string $user, string $password): ?User
    {
        $ldap_host = "ldap.forumsys.com";
        $ldap_dn = "uid=${user},dc=example,dc=com";
        $ldap_manager_group = "inetOrgPerson";
        $ldap = ldap_connect($ldap_host);
        ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
        ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);
        try {
            ldap_bind($ldap, $ldap_dn, $password);
            // geçerli
            // gruplarda varlığı kontrol ediliyor.
            $filter = "(uid=" . $user . ")";
            $attr = [
                "objectclass",
                "cn",
                "mail",
                "uidnumber"
            ];
            $result = ldap_search($ldap, $ldap_dn, $filter, $attr) or exit("LDAP sunucusunda arama yapılamıyor");
            $entries = ldap_get_entries($ldap, $result);
            ldap_unbind($ldap);
            $cn = $entries[0]['cn'][0];
            $guid = $entries[0]['uidnumber'][0];
            $mail = $entries[0]['mail'][0];
            foreach ($entries[0]['objectclass'] as $grps) {
                // yöneticiyse,  loop'u durdur
                if ($grps === $ldap_manager_group) {
                    return $this->findOrCreate($cn, $mail, $guid);
                }
            }
        } catch (Exception $e) {
            return null;
        }
        return null;
    }
}
