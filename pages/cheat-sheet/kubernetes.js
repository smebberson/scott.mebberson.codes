import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';
import { kubernetes } from '../../lib/colours';

export default () => (
    <CheatSheet color={kubernetes} title="Kubernetes">
        <Cheat
            caption="Set the namespace for the minikube context to an empty string"
            code="$ kubectl config set-context minikube --namespace="
        />
        <Cheat
            caption="Download a file from a remote pod to your local machine"
            code="$ kubectl cp {namespace}/{pod}:{remote-file} {local-file}"
        />
    </CheatSheet>
);
